import { Component } from "react";

export class all extends Component{
    constructor(){
        super()
        this.state={
            count:0
        }

        
    }
    all=()=>{
        this.setState("all")
    }
   
}