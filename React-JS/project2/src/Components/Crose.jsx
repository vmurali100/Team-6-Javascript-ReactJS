import { Component } from "react";
import { Cchild } from "./Cchild";

export class Crose extends Component{
    constructor(props){
        super(props)
        this.state={
            user:["white to yellow","pink","purple","orange","red"]
        }
    }
    render(){
        return(
            <div>
                <Cchild alluser={this.state.user}/>
            </div>
        )
    }
}