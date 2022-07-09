import { useDispatch, useSelector } from "react-redux"
import { actions } from "./index3";
const App3=()=>{
    const count=useSelector((state)=>state.counter)
    console.log(count)
    const dispatch=useDispatch();
    const {incrementcount,decrementcount,addby}=actions
    const handleIncrement=()=>{
        dispatch(incrementcount())
    }
    const handleDecrement=()=>{
        dispatch(decrementcount())
    }
    const handleAddby=()=>{
        dispatch(addby(3))
    }
    return(
        <div>
            <h3>{count}</h3>
            <button onClick={handleIncrement}>Increase</button>
            <button onClick={handleDecrement}>Decrease</button>
            <button onClick={handleAddby}>Addby</button>
        </div>
    )
}
export default App3