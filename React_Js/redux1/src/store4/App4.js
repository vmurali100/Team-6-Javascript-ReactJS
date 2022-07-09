import React from 'react'

import { useDispatch, useSelector } from 'react-redux';


const App4=()=> {
  let count = useSelector((state)=>state.count)
  let dispatch=useDispatch();
  console.log(count)
  const incrementcount=()=>{
    dispatch({type:'INCREMENT'})
  }
  const decrementcount=()=>{
    dispatch({type:'DECREMENT'})
  }
  return (
    <div>
      <h2>Count:{count}</h2>
      <button onClick={incrementcount}>Increment</button>
      <button onClick={decrementcount}>Decrement</button>
      
    </div>
  );
}

export default App4;
