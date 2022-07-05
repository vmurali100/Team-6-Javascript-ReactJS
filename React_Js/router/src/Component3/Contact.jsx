import React from 'react'

const Contact = () => {
  return (
    <div>
      <h2>Welcome to contact component</h2>
      <br/>
      <label for="fName">First Name : </label>
        <input type="text" /> <br/>
        <label for="lName">Last Name :</label>
        <input type="text" name="" id="" step="3"/> <br/>
        <label for="number">Mobile Number</label>
        <input type="number" /><br/>
        <label for="email">Email : </label>
        <input type="password"/><br/>
        <label for="dob">Date of birth : </label>
        <input type="date"/><br/>
        <label for="pincode">Pincode</label> 
        <input type="number" value="pincode" Autofocus/>
        <button>Submit</button><br/>
    </div>
  )
}

export default Contact
