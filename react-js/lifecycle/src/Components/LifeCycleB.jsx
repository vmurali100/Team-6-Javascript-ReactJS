import { Component } from "react";

export default class LifeCyxleB extends Component{
    constructor(props){
        console.log("constructor triggered in lifecycleB")
        super(props)
        this.state={
            first:""
        }
    }
    render(){ //will trigger both mounting and render phase
        console.log("render triggred in lifecycleB")
        return(
            <div>
                <p>lifecycleB</p>
                <p>{this.props.msg}</p>
            </div>
        )
    }
    componentDidMount(){
        console.log("componentDidMountB")
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate lifecycleB triggered")
        return true
    }
    componentDidUpdate(){
        console.log("componentDidUpdate lifecycleB triggered")
    }
    
}