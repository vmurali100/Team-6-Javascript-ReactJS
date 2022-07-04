import { Component } from "react"

export class Air  extends Component{
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
            <button onClick={this.handlecount}>click here</button>
            <h1>count is :{this.state.count}</h1>
        </div>
    }
}