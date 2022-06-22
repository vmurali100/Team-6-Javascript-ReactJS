import React  from 'react'
import { useState } from 'react'

function FComp2({Message,person,Users}) {
  const[] = useState()
   
  return (
    <div>
      <p>FComp2</p>
      <h1>{Message}</h1>
      <h2>{person.fname}{person.lname}</h2>
      <ul>
        {Users.map((user,i)=>{
          return <div className="userinfo" key={i}>
            <h4>{user.fname}</h4>
            <h4>{user.lname}</h4>
          </div>
        })}
      </ul>
    </div>
  )
}

export default FComp2

 