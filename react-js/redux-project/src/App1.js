import { useDispatch, useSelector } from "react-redux"

function App1(){
    let coun=useSelector((state)=>state.coun)
    let dispatch=useDispatch();
    console.log(coun)
    const incrementcount=()=>{
        dispatch({type:'INCREMENT'})
    }
    const decrementcount=()=>{
        dispatch({type:'DECREMENT'})
    }
    return(
        <div className="App1">
           <h1>coun:{coun}</h1>
           <button onClick={incrementcount}>increment</button>
           <button onClick={decrementcount}>increment</button>
        </div>
    )
}
export default App1