import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteDetails, editDetails } from './detailsSlice'

const Detailstable = () => {
    const alldetails= useSelector((state)=>state.usersInfo.users)
    const dispatch=useDispatch()
    const handledeleteDetails=(i)=>{
        dispatch(deleteDetails(i))
    }
    const handleeditDetails=(i)=>{
        var info={
            isEdit:true,
            index:i
        }
        dispatch(editDetails(info))
    }
    return (
    <div>
      <table border={1}>
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Gender</th>
                <th>Age</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {alldetails.map((details,i)=>{
                return <tr key={i}>
                    <td>{details.fname}</td>
                    <td>{details.lname}</td>
                    <td>{details.email}</td>
                    <td>{details.pass}</td>
                    <td>{details.gender}</td>
                    <td>{details.age}</td>
                    <td><button onClick={()=>{handleeditDetails(i)}}>Edit</button></td>
                    <td><button onClick={()=>{handledeleteDetails(i)}}>Delete</button></td>
                </tr>
            })}
        </tbody>
      </table>
    </div>
  )
}

export default Detailstable
