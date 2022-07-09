import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {actions} from './index'
const App1 = () => {
    const count=useSelector((state)=>state.count)
   const dispatch= useDispatch()
   const{increment,decrement,addBy}=actions

   const handleIncrease=()=>{
    dispatch(increment())
   }
   const handleDecrement=()=>{
    dispatch(decrement())
   }
   const handleAddby=()=>{
    dispatch(addBy(-5))
   }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={handleIncrease}>increase</button>
        <button onClick={handleDecrement}>decrease</button>
        <button onClick={handleAddby}>add by</button>
    </div>
  )
}

export default App1