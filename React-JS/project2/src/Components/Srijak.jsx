import { Component } from "react";
import { Child } from "./Child";

export class Srijak extends Component{
    constructor(props){
        super(props)
        this.state={
            user:["janane","snega","gomathi","suganya"]
        }
    }
    render(){
        return(
            <div>
                <Child alluser={this.state.user}/>
            </div>
        )
    }
}