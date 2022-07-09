import React from 'react'
import { useSelector } from 'react-redux'

const Test = () => {
    const count=useSelector((state)=>state.count)
  return (
    <div>
      <h2>Count value in test component is :{count}</h2>
    </div>
  )
}

export default Test
