import { Component } from "react";
import { Hchild } from "./Hchild";

export class Hmarigold extends Component{
    constructor(props){
        super(props)
        this.state={
            user:[" deep orange", "golden yellow", "lemon yellow", "orange", "red" , "gold bicolor","yellow"]
        }
    }
    render(){
        return(
            <div>
                <Hchild allgold={this.state.user}/>
            </div>
        )
    }
}