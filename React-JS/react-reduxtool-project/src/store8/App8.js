import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '.'

function App8() {
    const count = useSelector((state)=>state.counter)
    const {IncrementCount,DecrementCount,addBy} = actions

    const dispatch = useDispatch()

    const incrementcount = ()=>{
        dispatch(IncrementCount())
    }
    const decrementcount = ()=>{
        dispatch(DecrementCount())
    }
    const AddBy = ()=>{
        dispatch(addBy(20))
    }

  return (
    <div>
        <h1>{count}</h1>
        <button onMouseOver={incrementcount}>Increment</button>
        <button onMouseOver={decrementcount}>Decrement</button>
        <button onMouseOver={AddBy}>AddBY</button>
    </div>
  )
}

export default App8