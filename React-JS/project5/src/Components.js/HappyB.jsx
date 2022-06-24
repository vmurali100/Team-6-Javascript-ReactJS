import { Component } from "react";

export default class HappyB extends Component{
    constructor(props){
        console.log("contructer triggered by HappyB")
        super(props)
        this.state={
            first:"",
            
        }
    }

    render(){
        console.log("triggered by render HappyB")
        return(
            <div>
                <p>HappyB</p>
                <p>{this.props.msg}</p>
                
            </div>
        )
    }
    //will trigger mounting phases
    componentDidMount(){
        console.log("componentdidmount triggerd by HappyB")
    }
    //will we check updated or what
    shouldComponentUpdate(){
        console.log("shouldcomponentupdate triggered by HappyB")
        return true
    }
    //will trigger updated phases
    componentDidUpdate(){
        console.log("componentdidupdated triggered by HappyB")
    }
}