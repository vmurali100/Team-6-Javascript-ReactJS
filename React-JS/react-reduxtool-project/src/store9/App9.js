import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '.'

function App9() {
    const count = useSelector((state)=>state.counter)
    const {Increment,Decrement,addBy} = actions
    const dispatch = useDispatch()

    const incrementcount =()=>{
        dispatch(Increment())
    }
    const decrementcount =()=>{
        dispatch(Decrement())
    }
    const AddBy =()=>{
        dispatch(addBy(30))
    }
  return (
    <div>
        <h2>{count}</h2>
        <button onMouseOver={incrementcount}>Increment</button>
        <button onMouseOver={decrementcount}>Decrement</button>
        <button onMouseOver={AddBy}>AddBy</button>

    </div>
  )
}

export default App9