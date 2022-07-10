import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from './index3';

const App3 = () => {
    const count = useSelector((state)=>state.counter);
    const {incrementCount,decrementCount,addBy} = actions
    const dispatch = useDispatch();

    const handleIncrementCount = ()=>{
        dispatch(incrementCount())
    }
    const handleDecrementCount = ()=>{
        dispatch(decrementCount())
    }
    const handleAddby = ()=>{
        dispatch(addBy(8))
    }
  return (
    <div>
        <h2>{count}</h2>
        <button onClick={handleIncrementCount}>IncrementCount</button>
        <button onClick={handleDecrementCount}>DecrementCount</button>
        <button onClick={handleAddby}>Add By</button>
    </div>
  )
}

export default App3