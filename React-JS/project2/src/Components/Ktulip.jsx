import { Component } from "react";
import { Kchild } from "./Kchild";

export class Ktulip extends Component{
    constructor(props){
        super(props)
        this.state={
            user:["white", "cream", "yellow", "red", "pink", "purple", "violet", "orange",  "green", "vermillion", "brown", "black","maroon"]
        }
    }
    render(){
        return(
            <div>
                <Kchild alluser={this.state.user}/>
            </div>
        )
    }
}