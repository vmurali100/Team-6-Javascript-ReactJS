import { Component } from "react"
import { HOCcomponent } from "./HOCcomponent"

export class Air  extends Component{
   
 
    render(){
       
        return <div>
            <h1>click</h1>
            <button onClick={this.props.increase}>click here</button>
            <h1>count is :{this.props.count}</h1>
        </div>
    }
}
export default HOCcomponent(Air)