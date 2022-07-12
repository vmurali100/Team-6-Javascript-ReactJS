import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TestCompo } from './TestCompo'

function App6() {
    let count = useSelector((state)=>state.count)
    let dsipatch=useDispatch()

    const increment =()=>{
        dsipatch({type:"INCREMENT"})
    }
    const decrement =()=>{
        dsipatch({type:"DECREMENT"})
    }
  return (
    <div>
        <h2>Count:{count}</h2>
        <button onMouseOver={increment}>Increment</button>
        <button onMouseOver={decrement}>Decrement</button>
         <TestCompo/>
    </div>
  )
}

export default App6