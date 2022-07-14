import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addDetails, updateDetails } from './detailsSlice'

const Details = () => {
    const [details,setdetails]=useState({
        fname:"",
        lname:"",
        email:"",
        pass:"",
        gender:"",
        age:""
    })
    const detailsObj=useSelector((state)=>state.usersInfo)
    console.log(detailsObj)
    useEffect(()=>{
        if(detailsObj.isEdit){
            setdetails(detailsObj.users[detailsObj.editIndex])
        }
    },[detailsObj])
   const dispatch=useDispatch()
   const handleChange=(e)=>{
        let newdetails = {...details};
        let fieldName = e.target.name;
        newdetails[fieldName]=e.target.value;
        setdetails(newdetails)
   }
   const handleSubmit=()=>{
   
    dispatch(addDetails(details))
    handleClear()
   }
   const handleClear=()=>{
    setdetails({
        fname:"",
        lname:"",
        email:"",
        pass:"",
        gender:"",
        age:""
    })
   }
   const handleupdate=()=>{
    let updateObj={
        data:details,
        index:detailsObj.editIndex,
        isEdit:false
    }
    dispatch(updateDetails(updateObj))
    handleClear()
   }
  return (
    <div>
      <form>
        <label htmlFor="fname">First Name : </label>
        <input type="text" name="fname" value={details.fname} onChange={(e)=>{handleChange(e)}}/><br/>
        <label htmlFor="lname">Last Name : </label>
        <input type="text" name="lname" value={details.lname} onChange={(e)=>{handleChange(e)}}/><br/>
        <label htmlFor="email">Email : </label>
        <input type="text" name="email" value={details.email} onChange={(e)=>{handleChange(e)}}/><br/>
        <label htmlFor="pass">Password : </label>
        <input type="text" name="pass" value={details.pass} onChange={(e)=>{handleChange(e)}}/><br/>
        <label htmlFor="gender">Gender : </label>
        <input type="text" name="gender" value={details.gender} onChange={(e)=>{handleChange(e)}}/><br/>
        <label htmlFor="age">Age : </label>
        <input type="text" name="age" value={details.age} onChange={(e)=>{handleChange(e)}}/><br/>
        <button type='button' onClick={detailsObj.isEdit ? handleupdate : handleSubmit}>{detailsObj.isEdit ? 'Update details' : 'Edit details'}</button>
      </form> 
    </div>
  )
}

export default Details
