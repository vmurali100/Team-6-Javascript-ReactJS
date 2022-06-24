import { Component } from "react";

export default class MotivationB extends Component{
    constructor(props){
        console.log("constructer trigged motivationB")
        super(props)
        this.state={
            first:""
        }
    }
    render(){
        console.log("render triggerd by motivational B")
        return(
            <div>
                <p>motivationB</p>
                <p>{this.props.msg}</p>
            </div>
        )
    }
    componentDidMount(){
        console.log("componentDidMount triggerd by motivational B")
    }
    shouldComponentUpdate(){
        console.log("shouldcomponentupdated triggered by motivational B")
        return true
    }
    componentDidUpdate(){
        console.log("componentdidupdated triggerd by motivational B")
    }
}