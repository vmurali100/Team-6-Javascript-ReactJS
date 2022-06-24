import { Component } from "react";

export default class PositiveB extends Component{
    constructor(props){
        console.log("constructor triggerd by Positive B")
        super(props)
        this.state={
            first:""
        }
    }
    render(){
        console.log("render triggerd by Positive B")
        return(
            <div>
                <p>PositiveB</p>
            <p>{this.props.msg}</p>
            </div>
        )
    }
    componentDidMount(){
        console.log("componentdidmoun triggerd by positive B ")
    }
    shouldComponentUpdate(){
        console.log("shouldcomponentupdate triggerd by positive B")
        return true
    }
    componentDidUpdate(){
        console.log("componentdidupdated triggerd by positive B")
    }
}