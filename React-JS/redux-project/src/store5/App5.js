import { useDispatch, useSelector } from "react-redux";

function App5(){
    let count=useSelector((state)=>state.count)
    let dispatch=useDispatch()
    console.log(count)
    const incremeantcount=()=>{
        dispatch({type:'INCREMEANT'})
    }
    const decremeantcount=()=>{
        dispatch({type:'DECREMEANT'})
    }
    return(
        <div>
            <h2>Count5:{count}</h2>
            <button onClick={incremeantcount}>Incremeant</button>
            <button onClick={decremeantcount}>decremeant</button>
        </div>
    )
}
export default App5