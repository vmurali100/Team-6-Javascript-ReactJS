import React,{useState} from 'react';

const Form3 = () => {
    const [address, setaddress] = useState({
        street:"",city:"",state:"",zipcode:"",country:""
    })
    const handleaddress=(event)=>{
        var variablename=event.target.name;
        var newaddress={...address}
        newaddress[variablename]=event.target.value;
        setaddress(newaddress)
    }
    const addform=()=>{
        console.log(address)
    }
    return <div>
        <h1>Address</h1>
        <hr />
        <label htmlFor="">Street :  </label>
        <input type="text" name="street" value={address.street} onChange={(event)=>{handleaddress(event)}}/><br /><br />
        <input type="text" name="street" value={address.street} onChange={(event)=>{handleaddress(event)}}/><br /><br />
        <label htmlFor="">City,State</label>
        <input type="text" name="city" value={address.city} onChange={(event)=>{handleaddress(event )}} />
        <input type="text" name="state" value={address.state} onChange={(event)=>{handleaddress(event)}} /> <br /><br />
        <label htmlFor="">Zip Code : </label>
        <input type="text" name="zipcode" value={address.zipcode}  onChange={(event)=>{handleaddress(event)}}/><br /><br />
        <label htmlFor="">Country : </label>
        <input type="text" name="country" value={address.country} onChange={(event)=>{handleaddress(event)}}/> <br /> <br />
        <button onClick={addform}>Ok</button>
        <button>Cancel</button>
    </div>;
}


export default Form3;