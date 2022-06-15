import { Component } from "react";
import { Pchild4 } from "./Pchild4";

export class Parent4 extends Component{
    constructor(){
        super()
        this.state={
            user:["Honda","Activa","Platina","Scooty ppept"]
        }
    }
    render(){
        return(
            <div>
                <Pchild4 allBikes={this.state.user}/>
            </div>
        )
    }
}