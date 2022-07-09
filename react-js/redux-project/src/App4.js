
import { useDispatch, useSelector } from "react-redux";

function App4(){
    let count=useSelector((state)=>state.count)
    let dispatch=useDispatch();
    console.log(count)

    const increasecount=()=>{
        dispatch({type:'INCREASE'})
    }
    const decreasecount=()=>{
        dispatch({type:'DECREASE'})
    }
    return(
        <div className="App4">
            <h2>count:{count}</h2>
            <button onClick={increasecount}>increase</button>
            <button onClick={decreasecount}>decrease</button>
        </div>
    )
}
export default App4
