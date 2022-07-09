import React from 'react'
import { useSelector } from 'react-redux'

export const Testcom = () => {
  const count=  useSelector((state)=>state.count)
    
  return (
    <div>count in testcomp is : {count} </div>
  )
}
