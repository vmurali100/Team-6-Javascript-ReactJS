import React,{Component} from "react"
import { Hoc } from "./Hoc"

export class Ore1  extends Component{
    constructor(props){
        super(props)
        this.state={
        count:0
        
        }
    }
  handlehover=()=>{
    this.setState({count:this.state.count+1})
  }
 
    render(){
       
        return <div>
            <h1>click</h1>
            <button onClick={this.handlehover}>click  hover</button>
            <h1>count is :{this.state.count}</h1>
            

        </div>
    }
}

export default Hoc(Ore1)