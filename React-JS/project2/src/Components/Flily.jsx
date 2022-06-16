import { Component } from "react";
import { Fchild } from "./Fchild";

export class Flily extends Component{
    constructor(props){
        super(props)
        this.state={
            user:["white", "yellow", "pink", "red","orange"]
        }
    }
    render(){
        return(
            <div>
                <Fchild alluser={this.state.user}/>
            </div>
        )
    }
}