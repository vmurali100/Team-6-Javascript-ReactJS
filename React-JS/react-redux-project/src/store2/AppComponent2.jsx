import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TestComponent } from './TestComponent'


function AppComponent2() {
  let count = useSelector((state)=>state.count)
  let dispatch=useDispatch()
  console.log(count)  

  const increment = ()=>{
    dispatch({type:"INCREMENT"})
  }
  const decrement = ()=>{
    dispatch({type:"DECREMENT"})

  }
  return (
    <div>
        <h2>Count:{count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <TestComponent/>
    </div>
  )
}

export default AppComponent2