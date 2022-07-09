import React from 'react'
import { useSelector } from 'react-redux'

export const Chandhini = () => {
    const counts=useSelector((state)=>state.counts)
  return (
    <div>
        <h1>counts :{counts}</h1>
    </div>
  )
}
