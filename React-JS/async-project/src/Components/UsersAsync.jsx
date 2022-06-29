import React from 'react'

const UsersAsync = () => {
    const AllUsers = async ()=>{
        var allUsers =await fetch ("http://www.filltext.com/?rows=10&fname=%7BfirstName%7D&lname=%7BlastName%7D&pretty=true")
        var data = await allUsers.json()
        console.log(data)
    }
  return (
    <div>
        <button onClick={AllUsers}>get All users</button>
    </div>
  )
}

export default UsersAsync