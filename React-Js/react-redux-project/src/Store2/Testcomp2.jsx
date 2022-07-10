import React from 'react'
import { useSelector } from 'react-redux'

export const Testcomp2 = () => {
    const count = useSelector((state)=>state.count)
  return (
    <div>
        <h2>Count Value In test Component is : {count}</h2>
    </div>
  )
}
