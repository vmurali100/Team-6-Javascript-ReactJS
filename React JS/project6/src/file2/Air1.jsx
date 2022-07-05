import { Component } from "react"
import { HOCcomponent } from "./HOCcomponent"

export class Air1 extends Component{
    
 
    render(){
       
        return <div>
            <h1>click</h1>
            
            <h1 onMouseOver={this.props.increase}>count is :{this.props.count}</h1>
        </div>
    }
}
export default HOCcomponent(Air1)