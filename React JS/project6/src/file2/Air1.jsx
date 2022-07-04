import { Component } from "react"
import { HOCcomponent } from "./HOCcomponent"

export class Air1 extends Component{
    constructor(props){
        super(props)
        this.state={
        count:0
        
        }
    }
  handlecount=()=>{
    this.setState({count:this.state.count+1})
  }
 
    render(){
       
        return <div>
            <h1>click</h1>
            
            <h1 onMouseOver={this.handlecount}>count is :{this.state.count}</h1>
        </div>
    }
}
export default HOCcomponent(Air1)