import React ,{useState} from 'react'

const Assignment3 = () => {
   const [Address, setAddress] = useState({
    Street:"",CityState:"",ZipCode:"",Country:""
        
   })
   const handelchange=(event)=>{
    var variableName = event.target.name;
    var newAddress={...Address}
    newAddress[variableName] = event.target.value
    setAddress(newAddress)
   }

   const AddAddress =()=>{
    console.log(Address)
   }
  return (
    <div>
        <h1>Address</h1>
        
        <label htmlFor="">Street</label>
        <input type="text" name="Street"  value={Address.Street} onChange={(event)=>{handelchange(event)}}/> <br />

        <label htmlFor="">City,State :</label>
        <input type="text " name="CityState" value={Address.CityState} onChange={(event)=>{handelchange(event)}}/> <br />

        <label htmlFor="">ZipCode</label>
        <input type="text" name="ZipCode"  value={Address.ZipCode} onChange={(event)=>{handelchange(event)}}/> <br />

        <label htmlFor="">Country</label>
        <input type="text" name='Country' value={Address.Country} onChange={(event)=>{handelchange(event)}} />

        <button onClick={AddAddress}>AddUsers</button>
    </div>
  )
}

export default Assignment3