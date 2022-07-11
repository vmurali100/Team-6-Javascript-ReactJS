import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from './index4'

const App4 = () => {
  const count=useSelector((state)=>state.count)
  const{increase,decrease,addBy}=actions
  const dispatch=useDispatch()
  console.log(count)
  const increment=()=>{
    dispatch(increase())
  }
  const decrement=()=>{
    dispatch(decrease())
  }
  const addby=()=>{
    dispatch(addBy(5))
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>increase</button>
      <button onClick={decrement}>decrease</button>
      <button onClick={addby}>add by</button>
    </div>
  )
}

export default App4