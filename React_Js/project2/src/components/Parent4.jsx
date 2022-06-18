import { Component } from "react";
import Child4 from "./Child4";

export default class Parent4 extends Component{
    constructor(props){
        super(props)
        this.state={
            vegetables:["carrot","bicruit","bringal","ladiesfinger","capsicum"]
        }
    }
    render(){
        return(
            <div>
                <Child4 allvegetables={this.state.vegetables}/>
            </div>
        )
    }
}