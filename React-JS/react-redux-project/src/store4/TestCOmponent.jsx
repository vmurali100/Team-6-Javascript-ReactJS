import React from 'react'
import { useSelector } from 'react-redux'

function TestCOmponent() {
    const count = useSelector((state)=>state.count)
  return (
    <div>
        <h2>Count Value In TestComponent is :{count}</h2>
    </div>
  )
}

export default TestCOmponent