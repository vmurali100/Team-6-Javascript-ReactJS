import { Component } from "react";

export class Child extends Component{
    constructor(props){
        super(props)
        this.state={
          show:false 
        }
    }
    change=()=>{
       this.setState({show:true})  
    }
    render(){
        return (
            <div>
                <button onClick={this.change}>show users</button>
           {this .state.show && 
            <ul>
            {this.props.all.map((user,i)=>{
               return <li key={i}>{user}</li> 
            })}
            </ul>}
            </div>
        )
    }
}