import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TestCompo5 } from './TestCompo5'

function App5() {
    let count = useSelector((state)=>state.count)
    let dsipatch = useDispatch()

    const increment = ()=>{
        dsipatch({type:"INCREMENT"})
    }
    const decrement = ()=>{
        dsipatch({type:"DECREMENT"})
    }

  return (
    <div>
        <h2>Count:{count}</h2>
        <button onMouseOver={increment}>increment</button>
        <button onMouseOver={decrement}>decrement</button>
        <TestCompo5/>
    </div>
  )
}

export default App5