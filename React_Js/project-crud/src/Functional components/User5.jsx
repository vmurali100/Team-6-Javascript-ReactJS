
import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'


const User5 = () => {
    const [regist,setregist]=useState({university:"",institute:"",branch:"",degree:"",average:"",experience:"",website:"",id:""})
    const [allperson,setallperson]=useState([])
    const [isedit,setisedit]=useState(false)
    const handlechange=(event)=>{
        var variablename=event.target.name
        const newuser={...regist}
        newuser[variablename]=event.target.value
        setregist(newuser)
    }
    const getallusers=()=>{
        axios.get("http://localhost:3000/users5").then((response)=>{
            setallperson(response.data)
        })
    }
    const clearusers=()=>{
        setregist({university:"",institute:"",branch:"",degree:"",average:"",experience:"",website:""})
    }
    const submit=()=>{
        console.log(regist)
        axios.post("http://localhost:3000/users5",regist).then((response)=>{
        console.log("person added successfully")
        clearusers()
        getallusers()
        })
    }
    useEffect(()=>{
        getallusers()
    },[])
    const deleteuser=(persondetails)=>{
        axios.delete("http://localhost:3000/users5/"+persondetails.id).then((response)=>{
        getallusers()
        })
    }
    const edituser=(personinfo)=>{
        setisedit(true)
        setregist(personinfo)
    }
    const update=()=>{
        axios.put("http://localhost:3000/users5/"+regist.id,regist).then(()=>{
            getallusers()
            clearusers()
            setisedit(false)
        })
    }
  return (
    <div>
      <form>
        <h3>Registration Details</h3>
        <label htmlFor="">University</label>
            <input type="text" name='university' value={regist.university} onChange={(event) => { handlechange(event) }} />
            <br />
            <label htmlFor="">Institue</label>
            <input type="text" name='institute' value={regist.institute} onChange={(event) => { handlechange(event) }} />
            <br />
            <label htmlFor="">Branch</label>
            <input type="text" name='branch' value={regist.branch} onChange={(event) => { handlechange(event) }} />
            <br />
            <label htmlFor="">Degree</label>
            <input type="text" name='degree' value={regist.degree} onChange={(event) => { handlechange(event) }} />
            <br />
            <label htmlFor="">Average</label>
            <input type="text" name='average' value={regist.average} onChange={(event) => { handlechange(event) }} />
            <br />
            <label htmlFor="">Experience</label>
            <input type="text" name='experience' value={regist.experience} onChange={(event) => { handlechange(event) }} />
            <br />
            <label htmlFor="">Your Website or Blog</label>
            <input type="text" name='website' value={regist.website} onChange={(event) => { handlechange(event) }} />
            <br />
            <input type="text" name="id" hidden />
            {isedit ? <button onClick={update}>update</button> :  <button onClick={submit}>SUBMIT</button>
}
                       
      </form>
      <hr/>
      <table border={1}>
        <thead>
            <tr>
                <th>University</th>
                <th>Institute</th>
                <th>Branch</th>
                <th>Degree</th>
                <th>Average</th>
                <th>Experience</th>
                <th>Website</th>
                <th>Edit User</th>
                <th>Delete User</th>
            </tr>
        </thead>
        <tbody>
            {allperson.map((personinfo,i)=>{
                return <tr key={i}>
                    <td>{personinfo.university}</td>
                    <td>{personinfo.institute}</td>
                    <td>{personinfo.branch}</td>
                    <td>{personinfo.degree}</td>
                    <td>{personinfo.average}</td>
                    <td>{personinfo.experience}</td>
                    <td>{personinfo.website}</td>
                    <td><button onClick={()=>{edituser(personinfo)}}>Edit User</button></td>
                    <td><button onClick={()=>{deleteuser(personinfo)}}>Delete User</button></td>
                </tr>
            })}
        </tbody>
      </table>
    </div>
  )
}

export default User5
