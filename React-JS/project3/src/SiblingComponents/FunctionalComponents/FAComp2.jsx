import React  from 'react'
import { useState } from 'react'

function FAComp2({Message,person,Users}) {
  const[] = useState()
   
  return (
    <div>
      <p>FAComp2</p>
      <h1>{Message}</h1>
      <h2>{person.fname}{person.lname}</h2>
      <ul>
        {Users.map((user,i)=>{
          return <div className="userinfo" key={i}>
            <h4>{user.id}</h4>
            <h4>{user.userId}</h4>
            <h4>{user.title}</h4>
            <h4>{user.completed}</h4>
          </div>
        })}
      </ul>
    </div>
  )
}

export default FAComp2

 