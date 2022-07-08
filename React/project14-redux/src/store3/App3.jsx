import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const App3 = () => {
    let count=useSelector((state)=>state.count)
    let dispatch=useDispatch()
    console.log(count)
    const increase=()=>{
        dispatch({type:"INCREASE"})
    }
    const decrease=()=>{
        dispatch({type:"DECREASE"})
    }
  return (
    <div>
        <h1>count:{count}</h1>
        <button onClick={increase}>increase</button>
        <button onClick={decrease}>decrease</button>
    </div>
  )
}

export default App3