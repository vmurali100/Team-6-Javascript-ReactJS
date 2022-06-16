import { Component } from "react";
import { Echild } from "./Echild";

export class Ehibiscus extends Component{
    constructor(props){
        super(props)
        this.state={
            user:["orange", "yellow", "red", "pink","white"]
        }
    }
    render(){
        return(
            <div>
                <Echild alluser={this.state.user}/>
            </div>
        )
    }
}