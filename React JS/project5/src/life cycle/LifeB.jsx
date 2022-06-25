import { Component } from "react";

export class LifeB extends Component{
    constructor(props){
        console.log("con LifeB")
        super(props)
        this.state={
       message:""
      
        
        }
    }
    render(){
        console.log("ren LifeB")
        return <div>
            <h1>LifeB</h1>
            <h1>{this.props.all}</h1>
           
        </div>
    }


    componentDidMount(){
        console.log("componentDidMount LifeB")
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate LifeB")
        return true
    }
    componentDidUpdate(){
        console.log(" componentDidUpdate LifeB")
    }
}

