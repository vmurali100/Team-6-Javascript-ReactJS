import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '.';

function App7() {
    const count = useSelector((state)=>state.counter)
    const {increment,decrement,addBy}=actions;
    const dispatch = useDispatch()
    

const incrementcount = ()=>{
    dispatch(increment())
}
const decrementcount=()=>{
    dispatch(decrement())
}
const AddBy=()=>{
    dispatch(addBy(5))
}

    console.log(count)

  return (
    <div>
        <h2>{count}</h2>
        <button onClick={incrementcount}>Increment</button>
        <button onClick={decrementcount}>Decrement</button>
        <button onClick={AddBy}>AddBy</button>

    </div>
  )
}

export default App7