import { Component } from "react";
import Child6 from "./Child6";
import Child7 from "./Child7";
import Child8 from "./Child8";
import Child9 from "./Child9";

export default class Parent9 extends Component{
    constructor(props){
        super(props)
        this.state={
            name:"Padmaja",
            person:{
                email:"padhu@gmail.com",
                city:"chittoor"
            },
            states:["AP","TN","Ts","KA","KL", "DL"]
        }
    }
    render(){
        return(
            <div>
                <Child9 allnames={this.state.name}
                allpersons={this.state.person}
                allstates={this.state.states}/>
            </div>
        )
    }
}