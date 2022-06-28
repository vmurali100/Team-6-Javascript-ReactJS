import React,{useState} from 'react'

export const Form4 = () => {
    const [address, setaddress] = useState({
        Street:"",
        City:"",
        ZipCode:"",
        Country:""
    })
    const handleChange=(event)=>{
        var vairableName=event.target.name
        var newAddress={...address}
        newAddress[vairableName]=event.target.value
        setaddress(newAddress)
    }
   const displayAddress=()=>{
    console.log(address)
   }
  return (
    <div>
        <h1>Address</h1>
        <label htmlFor="Street">Street</label>
        <input type="text" name="Street" value={address.Street} onChange={(event)=>{handleChange(event)}}/><br/>

        <label htmlFor="City">City</label>
        <input type="text" name="City" value={address.City} onChange={(event)=>{handleChange(event)}}/><br/>

        <label htmlFor="ZipCode">ZipCode</label>
        <input type="text" name="ZipCode" value={address.ZipCode} onChange={(event)=>{handleChange(event)}}/><br/>
        <label htmlFor="Country">Country</label>
        <input type="text" name="Country" value={address.Country} onChange={(event)=>{handleChange(event)}}/><br/>
        <button onClick={displayAddress}>OK</button>
    </div>
  )
}
