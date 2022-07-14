import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteData, EditData } from '../slice1/dataSlice'

export const Datadetails = () => {
    const allData=useSelector((state)=>state.datainfo.datas)
    const dispatch=  useDispatch()
    const handledeletedata=(i)=>{
        dispatch(deleteData(i))
    }
    const handleeditdata=(i)=>{
      var int={
        isedit:true,
        index:i
      }
      dispatch(EditData(int))
    }
  return (
    <div>
        <table border="1">
            <thead>
                <tr>
                    <th>fname</th>
                    <th>lname</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {allData.map((data,i)=>{
                    return <tr key={i}>
                        <td>{data.fname}</td>
                        <td>{data.lname}</td>
                        <td><button onClick={()=>{handledeletedata(i)}}>delete</button></td>
                        <td><button onClick={()=>{handleeditdata(i)}}>edit</button></td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
  )
}
