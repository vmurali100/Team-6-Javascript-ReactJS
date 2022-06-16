import { Component } from "react";
import { Gchild } from "./Gchild";

export class Glotus extends Component{
    constructor(props){
        super(props)
        this.state={
            user:["white", "pink", "yellow", "red", "blue","purple"]
        }
    }
    render(){
        return(
            <div>
                <Gchild alllotus={this.state.user}/>
            </div>
        )
    }
}