import { Component } from "react"

export class Counter1  extends Component{
    constructor(props){
        super(props)
        this.state={
        count:0
        
        }
    }
  increase=()=>{
    this.setState({count:this.state.count+1})
  }
 
    render(){
       
        return <div>
           {this.props.render(this.state.count,this.increase)}
        </div>
    }
}