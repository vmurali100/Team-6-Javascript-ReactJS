import React from 'react'
import { useState } from 'react'

const Form4 = () => {
    const [address,setaddress]=useState({
        street:"",city:"",zip:"",country:""
    })
    const handlechange=(event)=>{
        var variablename=event.target.name
        var newaddress = { ...address }
        newaddress[variablename] = event.target.value
        setaddress(newaddress)
    }
    const ok = () => {
        console.log(address)
    }
    const cancel = () => {
        console.log(address)
    }
  return (
    <div>
      <h3>Address</h3>
      <hr/>
      <label htmlFor="">Street : </label>
      <input type="text" name="street" value={address.street} onChange={(event)=>{handlechange(event)}}/>
      <br/> 
      <label htmlFor=""></label>
      <input type="text" name="street" value={address.street} onChange={(event)=>{handlechange(event)}}/>
      <br/> 
      <label htmlFor="">City,State : </label>
      <input type="text" name="city" value={address.city} onChange={(event)=>{handlechange(event)}}/>
      <input type="text" name="state" value={address.state} onChange={(event)=>{handlechange(event)}}/>
      <br/>
      <label htmlFor="">Zip Code : </label>
      <input type="text" name="zip" value={address.zip} onChange={(event)=>{handlechange(event)}}/>
      <br/>
      <label htmlFor="">Country : </label>
      <input type="text" name="country" value={address.country} onChange={(event)=>{handlechange(event)}}/>
      <br/>  
      <button onClick={ok}>OK</button>
      <button onClick={cancel}>Cancel</button>
    </div>
  )
}

export default Form4
