import { Component } from "react";
import { LifeB } from "./LifeB";

export class LifeA extends Component{
    constructor(props){
        console.log("con LifeA")
        super(props)
        this.state={
        message:"hi",
      
        
        }
    }
    render(){
        console.log("ren LifeA")
        return <div>
            <h1>life A</h1>
            <button onClick={()=>{this.setState({message:"hello"})}}>change</button>
           <LifeB all={this.state.message}/>
        </div>
    }


    componentDidMount(){
        console.log("componentDidMount LifeA")
    }




   }
   