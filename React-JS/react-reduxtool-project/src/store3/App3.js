import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { actions } from '.'

function App3() {
    const count = useSelector ((state)=>state.counter)
    const {IncrementCount,DecrementCount,addBy}=actions

    const dispatch=useDispatch()

    const increment=()=>{
        dispatch(IncrementCount())
    }
    const decrement=()=>{
        dispatch(DecrementCount())
    }
    const addby=()=>{
        dispatch(addBy(5))
    }
  return (
    <div>
        <h3>{count}</h3>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={addby}>addBy</button>
    </div>
  )
}

export default App3