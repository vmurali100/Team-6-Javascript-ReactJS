import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {actions} from './index2'

const App2 = () => {
   const count= useSelector((state)=>state.count)
   const dispatch= useDispatch()
   const{increment,decrement,addBy}=actions

   const handleIncrement=()=>{
    dispatch(increment())
   }
   const handleDecrement=()=>{
    dispatch(decrement())
   }
   const handleAddby=()=>{
    dispatch(addBy(4))
   }

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={handleIncrement}>increase</button>
        <button onClick={handleDecrement}>decrease</button>
        <button onClick={handleAddby}>add by</button>
    </div>
  )
}

export default App2