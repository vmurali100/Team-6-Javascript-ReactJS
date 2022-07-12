import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { actions } from '.'


function App2() {
    const count = useSelector((state)=>state.counter)
    const {incrementcount,decrementcount,addBy}=actions
    const dispatch = useDispatch ()
    console.log(count)

    const incrementcounter =()=>{
        dispatch(incrementcount())
    }
    const decrementcounter =()=>{
        dispatch(decrementcount())
    }
    const addby =()=>{
        dispatch(addBy(10))
    }

  return (
    <div>
        <h2>{count}</h2>
        <button onClick={incrementcounter}>Increment</button>
        <button onClick={decrementcounter}>Decrement</button>
        <button onClick={addby}>AddBy</button>
    </div>
  )
}

export default App2