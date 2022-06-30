import React,{useState} from 'react';

const Form4 = () => {
    const [customer, setcustomer] = useState({
        username:"",
        password:"",
        emailaddress:"",
        dateofbirth:""
    })
    const handlecustomer=(event)=>{
       var variablename=event.target.name
       var newcustomer={...customer}
       newcustomer[variablename]=event.target.value
       setcustomer(newcustomer)
    }
    const addcustomer=()=>{
        console.log(customer)
    }
    return <div>
        <label htmlFor="">User Name</label><br /> <br />
        <input type="text" name="username" value={customer.username} onChange={(event)=>{handlecustomer(event)}}/><br /> <br />
        <label htmlFor="">Password</label><br /> <br />
        <input type="text" name="password" value={customer.password} onChange={(event)=>{handlecustomer(event)}}/><br /> <br />
        <label htmlFor="">Email Address</label><br /> <br />
        <input type="text" name="emailaddress" value={customer.emailaddress} onChange={(event)=>{handlecustomer(event)}}/><br /> <br />
        <select name="opti" >
            <option value="">i am aman</option>
            <option value="">i am a woman</option>
        </select><br /> <br />
        <select name="msg"  >
            <option value="">i want to find woman</option>
            <option value="">i want to find man</option>
        </select><br /> <br />
        <label htmlFor="">Date Of Birth</label><br /> <br />
        <input type="text" name="dateofbirth" value={customer.dateofbirth} onChange={(event)=>{handlecustomer(event)}}/>
        <button onClick={addcustomer}>submit</button>
    </div>;
}



export default Form4;