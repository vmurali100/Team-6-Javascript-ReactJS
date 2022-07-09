import { useDispatch, useSelector } from "react-redux"
import { actions } from "./store";

function App8(){
    const counter =useSelector((state)=>state.counter);
    const {incrementCount,decrementCount,addBy}=actions
    const dispatch=useDispatch();
    console.log(counter)

    const handleincrease=()=>{
        dispatch(incrementCount())
    }
    const handledecrease=()=>{
        dispatch(decrementCount())
    }
    const handleaddBy=()=>{
        dispatch(addBy(8))
    }
    return(
        <div className="App8">
          <p> {counter}</p>
          <button onClick={handleincrease}>increase</button>
          <button onClick={handledecrease}>decrease</button>
          <button onClick={handleaddBy}>Add By</button>
        </div>
    )
}
export default App8;