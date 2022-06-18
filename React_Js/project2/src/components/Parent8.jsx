import { Component } from "react";
import Child6 from "./Child6";
import Child7 from "./Child7";
import Child8 from "./Child8";

export default class Parent8 extends Component{
    constructor(props){
        super(props)
        this.state={
            states:["AP","TN","Ts","KA","KL", "DL"]
        }
    }
    render(){
        return(
            <div>
                <Child8 allstates={this.state.states}/>
            </div>
        )
    }
}