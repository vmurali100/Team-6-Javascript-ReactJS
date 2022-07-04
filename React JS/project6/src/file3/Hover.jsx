import { Component } from "react"


export class Hover  extends Component{
    
  
 
    render(){
       
        return <div>
            <h1>hover</h1>
            <h2  onMouseOver={this.props .increase}>{this.props.count}</h2>
        </div>
    }
}
