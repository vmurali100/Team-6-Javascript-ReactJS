import { Component } from "react";
import { Achild } from "./Achild";

export class Adahlia extends Component{
    constructor(props){
        super(props)
        this.state={
            users:["peach","red","white","yellow"]
        }
    }
    render(){
        return(
            <div>
                <Achild alluser={this.state.users}/>
            </div>
        )
    }
}