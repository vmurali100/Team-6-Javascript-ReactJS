import { Component } from "react";

export default class LifecycleB extends Component{
    constructor(props){
        console.log("constructer triggerd in lifecycleB")
        super(props)
        this.state={
            first:""
        }
    }
    //will trigger both mounting face and update phases
    render(){
        console.log("render triggerd in lifecycleB")
        return(
            <div>
                <p>LifecycleB</p>
                <p>{this.props.msg}</p>
            </div>
        )
    }
    //will trigger mounting phases 
    componentDidMount(){
        console.log("componentdidmount triggerd in lifecycleB")
    }
    //will trigger update phases
    shouldComponentUpdate(){
        console.log("componentdidmount triggerd life cycleB")
        return true
    }
    //will trigger update phases 
    componentDidUpdate(){
        console.log("componentdidupdated triggerd life cycle")
    }
}