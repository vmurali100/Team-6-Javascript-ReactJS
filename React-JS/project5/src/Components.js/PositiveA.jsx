import { Component } from "react";
import PositiveB from "./PositiveB";
import Positivecount from "./Positivecount";

export default class PositiveA extends Component{
    constructor(props){
        console.log("constructor triggerd by PositiveA")
        super(props)
        this.state={
            message:"i am positve",
            count:10
        }
    }
    render(){
        console.log("render triggerd by positiveA")
        return(
            <div>
                <p>PositiveA</p>
                <button onClick={()=>{this.setState({message:"A positive mindset brings positive things",count:26})}}>click me</button>
                <hr />
                <PositiveB mgs={this.state.message}/>
                <hr />
                {this.state.count===10 && <Positivecount/>}
            </div>
        )
    }
    componentDidMount(){
        console.log("componentDidMount triggerd by positiveA")
    }
}