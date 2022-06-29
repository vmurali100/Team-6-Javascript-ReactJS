import React from 'react'
import { useState } from 'react'
import { Filltext3ChildFun } from './Filltext3ChildFun'

export const Filltext3ParentFun = () => {
    const [filltextuser,setfilltextuser]=useState([])
    const getdatafromchid=(Filltext3ParentFun)=>{
        setfilltextuser(Filltext3ParentFun)
    }
  return (
    <div>
        <Filltext3ChildFun getdata={getdatafromchid}/>
        <table border="1">
            <thead>
                <tr>
                    <th>fname</th>
                    <th>lname</th>
                </tr>
            </thead>
            <tbody>
                {filltextuser.map((user,i)=>{
                    return(
                        <tr key={i}>
                            <td>{user.fname}</td>
                            <td>{user.lname}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}
