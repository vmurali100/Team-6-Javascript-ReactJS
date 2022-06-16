import { Component } from "react";
import { Jchild } from "./Jchild";

export class Jsunflower extends Component{
    constructor(props){
        super(props)
        this.state={
            user:["gold", "cream", "rose", "pink", "chocolate brown"]
        }
    }
    render(){
        return(
            <div>
             <Jchild alluser={this.state.user}/>
            </div>
        )
    }
}