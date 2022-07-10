import React from 'react'
import {useSelector} from 'react-redux'

export const Testcomp = () => {
    const count = useSelector((state)=>state.count)
  return (
    <div>
        <h2>Count value In test Component is :{count}</h2>
    </div>
  )
}
