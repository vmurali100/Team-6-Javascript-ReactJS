
import { useDispatch, useSelector } from "react-redux";

function App3(){
    let counter=useSelector((state)=>state.counter)
    let dispatch=useDispatch();
    console.log(counter)

    const increasecounter=()=>{
        dispatch({type:'INCREMENT'})
    }
    const decreasecounter=()=>{
        dispatch({type:'DECREMENT'})
    }
    return(
        <div className="App3">
            <h1>counter:{counter}</h1>
            <button onClick={increasecounter}>increase</button>
            <button onClick={decreasecounter}>increase</button>

        </div>
    )
}
export default App3