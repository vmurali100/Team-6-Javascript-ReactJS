import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const App6 = () => {
    let count=useSelector((state)=>state.count)
    console.log(count)
    let dispatch=useDispatch()
    const increment=()=>{
        dispatch({type:'INCREASE'})
    }
    const decrement=()=>{
        dispatch({type:'DECREASE'})
    }
  return (
    <div>
      <h2>count6:{count}</h2>
      <button onClick={increment}>INCREMENT</button>
      <button onClick={decrement}>DECREMENT</button>
    </div>
  )
}

export default App6
