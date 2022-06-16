import { Component } from "react";
import { Bchild } from "./Bchild";

export class Bjasmine extends Component{
    constructor(props){
        super(props)
        this.state={
            users:["yellow","white","bicolor blooms"]
        }
    }
    render(){
        return(
            <div>
                <Bchild alluser={this.state.users}/>
            </div>
        )
    }
}