import { useDispatch, useSelector } from "react-redux"

function App4 (){
    let count=useSelector((state)=>state.count)
    let dispatch=useDispatch()
    console.log(count)
    const Incremeantcount=()=>{
        dispatch({type:'INCREMEANT'})
    }
    const Decremeantcount=()=>{
        dispatch({type:'DECREMEANT'})
    }
    return(
        <div>
        <h2>Count4:{count}</h2>
        <button onClick={Incremeantcount}>Incremeant</button>
        <button onClick={Decremeantcount}>Decremeant</button>
        </div>
    )
}
export default App4