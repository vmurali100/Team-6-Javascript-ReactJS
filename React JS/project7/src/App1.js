import { actions } from "./store";
import {useDispatch,useSlector } from 'react-redux';


function App1() {
  const count = useSlector((state)=> state.counter);
  const {incrementcount,decrementcount,addby}=actions
  const dispatch=useDispatch();

  const handleincreament=()=>{
    dispatch(incrementcount())

  }
  const handledecreament=()=>{
    dispatch(decrementcount())

  }
  const handleaddby=()=>{
    dispatch(addby(5))

  }
  

  return (
    <div className="App">
    <h2>{count}</h2>
    <button onClick={handleincreament}>increase</button>
    <button onClick={handledecreament}>decrease</button>
    <button onClick={ handleaddby}>addby</button>
      
      
    </div>
  );
}

export default App1;
