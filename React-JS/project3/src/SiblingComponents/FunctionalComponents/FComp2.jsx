import React  from 'react'
import { useState } from 'react'

function FComp2({Message,person,Users}) {
  const[] = useState()
   
  return (
    <div>
      <p>FComp2</p>
      <p>{Message}</p>
      <p>{person.fname}{person.lname}</p>
      <ul>
        {Users.map((user,i)=>{
          return <div className="userinfo" key={i}>
            <p>{user.fname}</p>
            <p>{user.lname}</p>
          </div>
        })}
      </ul>
    </div>
  )
}

export default FComp2

 