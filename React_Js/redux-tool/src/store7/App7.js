import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from './index7'

const App7 = () => {
    const count=useSelector((state)=>state.counter)
    console.log(count)
    const dispatch=useDispatch()
    const {incrementcount,decrementcount,addby}=actions
    const handleincrement=()=>{
        dispatch(incrementcount())
    }
    const handledecrement=()=>{
        dispatch(decrementcount())
    }
    const handleaddby=()=>{
        dispatch(addby(2))
    }
  return (
    <div>
      <h3>Count7: {count}</h3>
      <button onClick={handleincrement}>Increase</button>
      <button onClick={handledecrement}>Decrease</button>
      <button onClick={handleaddby}>Addby</button>
    </div>
  )
}

export default App7
