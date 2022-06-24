import { Component } from "react";
import HappyB from "./HappyB";
import Happycount from "./Happycount";

export default class HappyA extends Component{
    constructor(props){
        console.log("triggered by constructor HappyA")
        super(props)
        this.state={
            message:"i am from HappyA",
            count:15
        }
    }
    render(){
        console.log("triggered by render HappyB")
        return(
            <div>
                <p>happyA</p>
                 <button onClick={()=>{this.setState({message:"Hello i am Happy to seeing u happy :) ",count:16})}}>i am HappyA going to change if u click me</button>
                 <hr />
                 <HappyB msg={this.state.message}/>
                 <hr></hr>
                 {this.state.count===15 && <Happycount/>}
            </div>
        )
    }
    componentDidMount(){
        console.log("componentdidmount tiggered by happyA")
    }
}