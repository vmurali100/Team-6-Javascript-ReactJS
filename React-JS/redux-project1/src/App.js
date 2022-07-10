
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from './store';


function App() {
  const count=useSelector((state)=>state.counter)
  console.log(count)
  const {incremeantCount,decrementCount,addBy}=actions
  const dispatch=useDispatch()

  const handleincremeant=()=>{
    dispatch(incremeantCount())
  }

  const handledecremeant=()=>{
    dispatch(decrementCount())
  }

  const handleaddby=()=>{
    dispatch(addBy(5))
  }
  return (
    <div className="App">
    <h2>{count}</h2>
    <button onClick={handleincremeant}>incremeant</button>
    <button onClick={handledecremeant}>decremeant</button>
    <button onClick={handleaddby}>addBy</button>
    </div>
  );
}

export default App
