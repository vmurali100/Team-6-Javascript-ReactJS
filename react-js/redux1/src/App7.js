import {useDispatch, useSelector } from "react-redux"
import { actions } from "./store";

 function App7(){
      const count=useSelector((state)=>state.counter);
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
        dispatch(addBy(7))
    }
    return(
        <div className="App7">
            <h3>{count}</h3>
            <button onClick={handleincrement}>increase</button>
            <button onClick={handledecrement}>decrease</button>
            <button onClick={handleaddBy}>Add By</button>
        </div>
    )
}
export default App7;