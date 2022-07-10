import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Testcomp1 } from './Testcomp1'

const App1 = () => {
  let count = useSelector((state) => state.count)
  console.log(count)

  let dispatch = useDispatch();
  const incrementCount=()=>{
    dispatch({type:'INCREMENT'})
  }
  const decrementCount=()=>{
    dispatch({type:'DECREMENT'})
  }
  return (
    <div>
      <h2>Count : {count}</h2>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
      <hr/>
      <Testcomp1/>
    </div>
  )
}

export default App1