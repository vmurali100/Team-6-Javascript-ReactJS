//nithya-parent,mani-child
import { Component } from "react"
import { Manikcomp } from "./Manikcomp"

export class Nithcomp extends Component{
    constructor(props){//props means send data from parent to child
        super(props)
        this.state={
            students:["haritha","saritha","kavitha"]
        }
    }
    render(){
        return<div>
            <Manikcomp allstudents={this.state.students}/>
        </div> 
    }
}