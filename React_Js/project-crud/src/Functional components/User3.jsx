import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const User3 = () => {
    const[address,setaddress]=useState({street:"",city:"",zip:"",country:"",id:""})
    const[alluser,setalluser]=useState([])
    const[isedit,setisedit]=useState(false)
    const handlechange=(event)=>{
        var variablename=event.target.name
        const newaddress={...address}
        newaddress[variablename]=event.target.value
        setaddress(newaddress)
    }
    const getallusers=()=>{
        axios.get("http://localhost:3000/users3").then((response)=>{
            setalluser(response.data)
        })
    }
    const clearusers=()=>{
        setaddress({street:"",city:"",zip:"",country:""})
    }
    const ok=()=>{
        console.log(address)
        axios.post("http://localhost:3000/users3",address).then((response)=>{
        console.log("user added successfully")
        clearusers()
        getallusers()
        })
    }
    useEffect(()=>{
        getallusers()
    },[])
    const deleteuser=(userdetails)=>{
        axios.delete("http://localhost:3000/users3/"+userdetails.id).then((response)=>{
        getallusers()
        })
    }
    const edituser=(userinfo)=>{
        setisedit(true)
        setaddress(userinfo)
    }
    const update=()=>{
        axios.put("http://localhost:3000/users3/"+address.id,address).then(()=>{
            getallusers()
            clearusers()
            setisedit(false)
        })
    }
  return (
    <div>
      <form>
      <h3>Address</h3>
      <hr/>
      <label htmlFor="">Street : </label>
      <input type="text" name="street" value={address.street} onChange={(event)=>{handlechange(event)}}/>
      <br/> 
      <label htmlFor=""></label>
      <input type="text" name="street" value={address.street} onChange={(event)=>{handlechange(event)}}/>
      <br/> 
      <label htmlFor="">City,State : </label>
      <input type="text" name="city" value={address.city} onChange={(event)=>{handlechange(event)}}/><br/>
      <input type="text" name="state" value={address.state}/>
      <br/>
      <label htmlFor="">Zip Code : </label>
      <input type="text" name="zip" value={address.zip} onChange={(event)=>{handlechange(event)}}/>
      <br/>
      <label htmlFor="">Country : </label>
      <input type="text" name="country" value={address.country} onChange={(event)=>{handlechange(event)}}/>
      <br/> 
      <input type="text" name="id" hidden /> 
      {isedit ? <button onClick={update} type="button">update</button>:<button onClick={ok} type="button">OK</button>}
      
      
      </form>
      <hr/>
      <table border={1}>
        <thead>
            <tr>
                <th>Street</th>
                <th>City</th>
                <th>Zip Code</th>
                <th>Country</th>
                <th>Edit User</th>
                <th>Delete User</th>
            </tr>
        </thead>
        <tbody>
            {alluser.map((userinfo,i)=>{
                return <tr key={i}>
                    <td>{userinfo.street}</td>
                    <td>{userinfo.city}</td>
                    <td>{userinfo.zip}</td>
                    <td>{userinfo.country}</td>
                    <td><button onClick={()=>{edituser(userinfo)}}>Edit User</button></td>
                    <td><button onClick={()=>{deleteuser(userinfo)}}>Delete User</button></td>
                </tr>
            })}
        </tbody>
      </table>
    </div>
  )
}

export default User3
