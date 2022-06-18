import { Component } from "react";
import Child6 from "./Child6";

export default class Parent6 extends Component{
    constructor(props){
        super(props)
        this.state={
            electronic:["fans","lights","tv","fridge","washing machine","air cooler","inverter"]
        }
    }
    render(){
        return(
            <div>
                <Child6 allelectronic={this.state.electronic}/>
            </div>
        )
    }
}