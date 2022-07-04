import { Component } from "react"


export class Click  extends Component{
    
  
 
    render(){
       
        return <div>
            <h1>click</h1>
            <button onClick={this.props .increase}>click here {this.props.count}</button>
            
        </div>
    }
}
