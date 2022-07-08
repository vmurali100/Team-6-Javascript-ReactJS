import React from 'react'
import { useSelector } from 'react-redux'

export const TextComp = () => {
    const count = useSelector((state)=>state.count)
  return (
    <div> 
        <h1>Count Value is : {count}</h1>
    </div>
  )
}
