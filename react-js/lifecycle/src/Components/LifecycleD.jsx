import { Component } from "react";

export default class LifeCycleD extends Component{
    constructor(props){
        console.log("constructor triggered LifeCycleD")
        super(props)
        this.state={
            first:""
        }
    }
    render(){
        console.log("render triggered LifeCycleD")
        return(
            <div>
                <p>lifecycleD</p>
                <p>{this.props.msg}</p>
            </div>
        )
    }
    componentDidMount(){
        console.log("componentDidMount lifecycleD")

    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate lifecycleD")
        return true
    }
    componentDidUpdate(){
        console.log("componentDidUpdate lifecycleD")
    }
}