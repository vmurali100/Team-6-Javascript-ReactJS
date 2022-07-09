import { useDispatch, useSelector } from "react-redux"
import { actions } from "./store";

function App3(){
    const count=useSelector((state)=>state.counter);
    const {incrementCount,decrementCount,addBy}=actions
    const dispatch=useDispatch();
    console.log(count)

    const handleIncrement=()=>{
        dispatch(incrementCount())
    }
    const handleDecrement=()=>{
        dispatch(decrementCount())
    }
    const handleAddBy=()=>{
        dispatch(addBy(8))
    }
    return(
        <div className="App3">
            <h1>{count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleAddBy}>Add By</button>
        </div>
    )
}
export default App3;