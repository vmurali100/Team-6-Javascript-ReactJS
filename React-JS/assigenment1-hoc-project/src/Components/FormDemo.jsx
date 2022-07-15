import React, { Component } from 'react'
import { HOCComponents } from './HOCComponents'

class Form extends Component {
  render() {
    return (
      <div>
        <form>
                {/* <label htmlFor="fname">First Name : </label>
                <input type="text" name="fname" value={user.fname} onChange={(e) => { handleChange(e) }} /> <br />
                <label htmlFor="lname">Last Name : </label>
                <input type="text" name="lname" value={user.lname} onChange={(e) => { handleChange(e) }} /> <br />
                <button type="button" onClick={userObj.isEdit ? handleupdateUser : handleSubmit}>{userObj.isEdit ? "Update User" : "Add User"}</button> */}

                <label htmlFor="title">Title :</label>
                <input type="text" name="" id="" /> <br />
                <label htmlFor="price">Price :</label> 
                <input type="text" name="" id="" /> <br />
                <label htmlFor="description">Description :</label>
                <input type="text" name="" id="" /> <br />
                <label htmlFor="category">Category :</label>
                <input type="text" name="" id="" /> <br />
                <label htmlFor="image">Image :</label>
                <input type="text" name="" id="" /> <br />
                <button>Add User</button>

            </form>
      </div>
    )
  }
}
export default HOCComponents(Form)