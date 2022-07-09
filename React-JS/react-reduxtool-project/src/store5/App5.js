import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '.'

function App5() {
  const count = useSelector((state)=>state.counter)
  const {Increment,Decrement,addBy}=actions

  const dispatch = useDispatch()

  const incrementcount = () =>{
    dispatch(Increment())
  }
  const decrementcount = () =>{
    dispatch(Decrement())
  }
  const addby = () =>{
    dispatch(addBy(10))
  }
  return (
    <div>
      <h2>
        {count}
      </h2>
      <button onClick={incrementcount}>Increment</button>
      <button onClick={decrementcount}>Decrement</button>
      <button onClick={addby}>addBy</button>
    </div>
  )
}

export default App5