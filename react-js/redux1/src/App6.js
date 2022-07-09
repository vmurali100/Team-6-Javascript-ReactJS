import {useSelector, useDispatch } from "react-redux";
import { actions } from "./store";

function App6(){
    const count= useSelector((state)=>state.counter);
    const {incrementCount,decrementCount,addBy}=actions
    const dispatch=useDispatch();
    console.log(count)

    const handleincrement=()=>{
        dispatch(incrementCount())
    }
    const handledecrement=()=>{
        dispatch(decrementCount())
    }
    const handleaddBy=()=>{
        dispatch(addBy(4))
    }
    return(
        <div className="App6">
            <h1>{count}</h1>
            <button onClick={handleincrement}>Increment</button>
            <button onClick={handledecrement}>Decrement</button>
            <button onClick={handleaddBy}>Add By</button>
        </div>
    )
}
export default App6;