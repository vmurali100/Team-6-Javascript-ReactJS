import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from './index3'


const App3 = () => {
    const count=useSelector((state)=>state.counter)
    const dispatch=useDispatch()
    const{increase,decrease,addBy}=actions

  const increment=()=>{
    dispatch(increase())
  }
  const decrement=()=>{
    dispatch(decrease())
  }
  const addby=()=>{
    dispatch(addBy(10))
  }


  return (
    <div>
        <h2>{count}</h2>
        <button onClick={increment}>increase</button>
        <button onClick={decrement}>decrease</button>
        <button onClick={addby}>add by</button>
    </div>
  )
}

export default App3