import { Component } from "react";

export default class CountCandDComponent extends Component{
    componentWillUnmount(){
        console.log("componentWillUnmount triggered")
    }
    render(){
        return(
            <div>
                CountCandDComponent
            </div>
        )
    }
}