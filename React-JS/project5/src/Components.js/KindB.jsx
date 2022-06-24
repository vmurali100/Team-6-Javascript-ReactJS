import { Component } from "react";

export default class KindB extends Component{
    constructor(props){
        console.log("constructer triggerd by Kind B")
        super(props)
        this.state={
            first:""
        }
    }
    render(){
        console.log("render triggered KindB")
        return(
           <div>
             <p>KindB</p>
            <p>{this.props.msg}</p>
           </div>
        )
    }
    componentDidMount(){
        console.log("componentdidmount triggerd KindB")
    }
    shouldComponentUpdate(){
        console.log("shouldcomponent triggerd KindB")
        return true
    }
    componentDidUpdate(){
        console.log("componentdidupdate triggerd KindB")
    }
}