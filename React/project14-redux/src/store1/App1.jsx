import React from 'react'

import { useDispatch, useSelector } from 'react-redux'

const App1 = () => {
 let count= useSelector((state)=>state.count)
 let dispatch=useDispatch()
 console.log(count)
 const increment=()=>{
  dispatch({type:"INCREMENT"})
 }
 const decrement=()=>{
  dispatch({type:"DECREMENT"})
 }
  return (
    <div>
      <h1>count:{count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  )
}

export default App1