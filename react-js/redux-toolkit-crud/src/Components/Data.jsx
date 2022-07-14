import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addData, UpdateData } from '../slice1/dataSlice'

export const Data = () => {
    const [data,setdata]=useState({
        fname:"",
        lname:""
    })

  const dataobj=  useSelector((state)=>state.datainfo)
  useEffect(()=>{
    if(dataobj.isedit){
      setdata(dataobj.datas[dataobj.editindex])
    }
       
  },[dataobj])
  
  const dispatch=useDispatch();
  const handlechange=(e)=>{
   let newdata = {...data};
   let fieldname = e.target.name;
   newdata[fieldname]=e.target.value;
   setdata(newdata)
  }
 const handlesubmit=()=>{
  dispatch(addData(data))
  handleclear()
 }
 const handleclear=()=>{
   setdata({
    fname:"",
    lname:""
   })
 }
 const handleUpdateUser=()=>{
   let updateobj={
    dat:data,
    index:dataobj.editindex,
    isedit:false
   }
   dispatch(UpdateData(updateobj))
   handleclear()
 }
  return (
    <div>
        <form >
            <label htmlFor="fname">fname</label>
            <input type="text" name='fname' value={data.fname} onChange={(e)=>{handlechange(e)}} /> <br/>
            <label htmlFor="lname">lname</label>
            <input type="text" name='lname' value={data.lname} onChange={(e)=>{handlechange(e)}}/> <br/>
            <button type='button' onClick={dataobj.isedit ? handleUpdateUser:handlesubmit}>{dataobj.isedit ? 'Update Data':'Edit Data'}</button>
        </form>
    </div>
  )
}
