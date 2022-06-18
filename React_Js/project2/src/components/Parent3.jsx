import { Component } from "react";
import Child3 from "./Child3";

export default class Parent3 extends Component{
    constructor(props){
        super(props)
        this.state={
            company:["TCS","HCL","Infosis","Accenture","cognizent"]
        }
    }
    render(){
        return(
            <div>
                <Child3 alluser={this.state.company}/>
            </div>
        )
    }
}