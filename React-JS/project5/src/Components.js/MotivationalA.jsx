import { Component } from "react";
import MotivationB from "./MotivationalB";
import Motivationalcount from "./Motivationalcount";

export default class MotivationA extends Component{
    constructor(props){
        console.log("contructer triggerd motivationA")
        super(props)
        this.state={
            message:"i am MOTIVATIONl A",
            count:6
        }
    }
    render(){
        console.log("render triggerd motivationA")
       return(
        <div>
            <p>motivationalA</p>
            <button onClick={()=>{this.setState({message:"i make people to get motiveted",count:9})}}>click me i will be change</button>
            <hr />
            <MotivationB msg={this.state.message}/>
            <hr />
            {this.state.count===6 && <Motivationalcount/>}
        </div>
       )
    }
    componentDidMount(){
        console.log("componentdidmount triggered motivationA")
    }
}