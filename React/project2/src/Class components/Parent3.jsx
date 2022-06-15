import { Component } from "react";
import { Pchild3 } from "./Pchild3";

export class Parent3 extends Component{
    constructor(){
        super()
        this.state={
            users:["Goa","Maldives","Dubai","America"]
        }
    }
    render(){
        return(
            <div>
                <Pchild3 allplaces={this.state.users}/>
            </div>
        )
    }
}