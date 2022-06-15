import { Component } from "react";

export class Child1 extends Component{
    constructor(props){
        super(props)
        this.state={
            
        }
    }
    render(){
        return (
            <div>
            <ul>
            {this.props.all.map((user)=>{
               return <li>{user}</li> 
            })}
            </ul>
            </div>
        )
    }
}