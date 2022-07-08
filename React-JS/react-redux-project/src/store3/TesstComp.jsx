import React from 'react'
import { useSelector } from 'react-redux'

export const TesstComp = () => {
   const count = useSelector((state)=>state.count)
  return (
    <div>
        <h2>Count Value In TesstCompo is :{count}</h2>
    </div>
  )
}
