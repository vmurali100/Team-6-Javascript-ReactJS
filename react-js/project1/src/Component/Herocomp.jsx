import { Component } from "react";
import { Pavankalyancomp } from "./Pavankalyancomp";

export  class Herocomp extends Component{
    constructor(props){
        super(props)
        this.state={
            heros:["ram","NTR","nani","chiranjeevi"]
        }
    }
    render(){
        return(
            <div>
                <Pavankalyancomp allheros={this.state.heros}/>
            </div>
        )
    }
}