import { Component } from "react";
import { Ichild } from "./Ichild";

export class Inarcissus extends Component{
    constructor(props){
        super(props)
        this.state={
            user:["white","yellow","orange","pink"]
        }
    }
    render(){
        return(
            <div>
                <Ichild alluser={this.state.user}/>
            </div>
        )
    }
}