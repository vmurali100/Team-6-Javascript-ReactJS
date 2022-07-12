import React from 'react'
import { useSelector } from 'react-redux'

export const TestCompo = () => {
    let count = useSelector((state)=>state.count)
  return (
    <div>
        <h2>Count value in Test Component is :{count}</h2>
    </div>
  )
}
