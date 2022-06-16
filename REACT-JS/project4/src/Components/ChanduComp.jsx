import React,{component} from "react";
import { Component } from "react";
import ChildComp from "./Childcomp";

export default class ChanduComp extends Component{
    constructor(props){
        super(props)

        this.state={
            users:["sam","varma","parveen","surumi"]
        }
    }
    render(){
        return(
            <div>
                <ChildComp allUsers={this.state.users}/>
            </div>
        )
        
    }
}