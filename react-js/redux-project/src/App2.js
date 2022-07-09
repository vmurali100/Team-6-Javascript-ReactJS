import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Chandhini } from "./store2/Chandhini";

function App2(){
    let counts=useSelector((state)=>state.counts)
    let dispatch=useDispatch();
    console.log(counts)
const increasecount=()=>{
    dispatch({type:'INCREASE'})
}
const decreasecount=()=>{
    dispatch({type:'DECREASE'})
}
    return (
        <div className="App2">
            <h1>counts:{counts}</h1>
            <button onClick={increasecount}>increase</button>
            <button onClick={decreasecount}>decrease</button>
            <hr/>
            <Chandhini/>
        </div>
    )
}
export default App2