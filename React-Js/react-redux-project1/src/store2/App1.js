import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from './index1';

function App1() {
    const count = useSelector((state)=> state.counter);
    const {increment,decrement,addBy} =actions
    const dispatch = useDispatch();

    const handleIncrement=()=>{
        dispatch(increment())
    }
    const handleDrement=()=>{
        dispatch(decrement())
    }
    const handleAddby=()=>{
        dispatch(addBy(10))
    }
  return (
    <div>
        <h2>{count}</h2>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDrement}>Decrement</button>
        <button onClick={handleAddby}>Add By</button>

    </div>
  )
}

export default App1