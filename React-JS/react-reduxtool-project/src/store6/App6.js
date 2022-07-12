import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '.'

function App6() {
  const count = useSelector((state)=>state.counter)
  const{incrementcount,decrementcount,addBy}=actions

  const dispatch = useDispatch()

  const IncrementCount=()=>{
    dispatch(incrementcount())
  }
  const DecrementCount=()=>{
    dispatch(decrementcount())
  }
  const AddBy=()=>{
    dispatch(addBy(10))
  }
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={IncrementCount}>Increment</button>
      <button onClick={DecrementCount}>Decrement</button>
      <button onClick={AddBy}>Addby</button>
    </div>
  )
}

export default App6