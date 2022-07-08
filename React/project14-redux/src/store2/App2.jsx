import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const App2 = () => {
    let count=useSelector((state)=>state.count)
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
        <button onClick={increment}>increase</button>
        <button onClick={decrement}>decrease</button>
    </div>
  )
}

export default App2