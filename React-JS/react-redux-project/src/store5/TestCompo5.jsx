import React from 'react'
import { useSelector } from 'react-redux'

export const TestCompo5 = () => {
    const count = useSelector((state)=>state.count)
  return (
    <div>
        <h2>Count Value In  TestCompo5 is : {count}</h2>
    </div>
  )
}
