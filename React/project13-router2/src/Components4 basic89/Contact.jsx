import React from 'react'

const Contact = () => {
  return (
    <div>
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

        <select name="" id="">
            <option value="">Html</option>
            <option value="">Css</option>
            <option value="">Js</option>
            <option value="">react js</option>
            <option value="">angular</option>
        </select><br/>

        <button>Submit</button><br/>
        <textarea name="" id="" cols="30" rows="10"></textarea><br/>
        <label for="pincode">Pincode</label>
        <input type="number" value="pincode" Autofocus/>

    </div>
  )
}

export default Contact