import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletePerson, editPerson } from './personSlice'

const Persontable = () => {
const allperson=useSelector((state)=>state.usersInfo.users)
const dispatch=useDispatch()
const handledeletePerson=(i)=>{
    dispatch(deletePerson(i))
}
const handleeditPerson=(i)=>{
    var info={
        isEdit:true,
        index:i
    }
    dispatch(editPerson(info))
}
  return (
    <div>
      <table border={1}>
        <thead>
            <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date of Birth</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Edit</th>
            <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {allperson.map((person,i)=>{
                return <tr key={i}>
                    <td>{person.fname}</td>
                    <td>{person.lname}</td>
                    <td>{person.dob}</td>
                    <td>{person.email}</td>
                    <td>{person.mobile}</td>
                    <td><button onClick={()=>{handleeditPerson(i)}}>Edit</button></td>
                    <td><button onClick={()=>{handledeletePerson(i)}}>Delete</button></td>
                </tr>
            })}
        </tbody>
      </table>
    </div>
  )
}

export default Persontable
