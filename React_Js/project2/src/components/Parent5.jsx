import { Component } from "react";
import Child5 from "./Child5";

export default class Parent5 extends Component{
    constructor(props){
        super(props)
        this.state={
            biscuits:["milkbisci","goodday","darkfantacy","parleg","saltbiscuit"]
        }
    }
    render(){
        return(
            <div>
                <Child5 allbiscuits={this.state.biscuits}/>
            </div>
        )
    }
}