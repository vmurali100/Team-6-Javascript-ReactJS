import { Component } from "react";

export default class ThounghtB extends Component{
    constructor(props){
        console.log("constructor triggerd throunghB")
        super(props)
        this.state={
            first:""
        }
    }
    render(){
        console.log("rendder trigged ThounghtB")
        return(
            <div>
                <p>ThounghtB</p>
                <p>{this.props.msg}</p>
            </div>
        )
    }
    componentDidMount(){
        console.log("componentDidMount trigged ThounghtB")
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate trigged ThounghtB")
        return true
    }
    componentDidUpdate(){
        console.log("componentDidUpdate trigged ThounghtB")
    }
}