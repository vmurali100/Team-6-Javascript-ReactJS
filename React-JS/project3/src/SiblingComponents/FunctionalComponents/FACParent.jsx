import React, { useState } from 'react'
import FAComp1 from './FAComp1'
import FAComp2 from './FAComp2'


function FACParent() {
  const [person, setperson] = useState({})

  const sendMessage = (person) => {
    setperson(person)
  }
  return (
    <div>
      <p>FAComponents</p>
      <FAComp1 sendMessage={sendMessage} />
      <FAComp2 person={person} />

    </div>
  )
}

export default FACParent