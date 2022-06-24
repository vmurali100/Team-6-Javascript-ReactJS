import { Component } from "react";
import ThounghtB from "./ThounghtB";
import Thounghtcount from "./Thounghtcount";

export default class ThounghtA extends Component{
    constructor(props){
        console.log("constructor triggerd by ThounghtA")
        super(props)
        this.state={
            message:"i am good ThounghtA",
            count:10
        }
    }
    render(){
        console.log("render triggerd by thounghtA")
        return(
          <div>
              <p>ThounghtA</p>
            <button onClick={()=>{this.setState({message:"Try to be a rainbow in someone's cloud",count:15})}}>click here</button>
            <hr />
            <ThounghtB msg={this.state.message}/>
            <hr/>
            {this.state.count===10 && <Thounghtcount/>}
          </div>
        )
        }
    componentDidMount(){
        console.log("componentDidMount triggedr by ThounghtA")
    }
    }