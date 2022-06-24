import { Component } from "react";
import CountCandDComponent from "./CountCandDComponent";
import LifeCycleD from "./LifecycleD";

export default class LifeCycleC extends Component{
    constructor(props){
        console.log("constructor triggered in lifecycleC")
        super(props)
        this.state={
            message:"i am from lifecycleC",
            count:15
        }
    }
    render(){
      console.log("render triggered lifecycleC")
      return(
        <div>
            <p>lifecycleA</p>
            <button onClick={()=>{this.setState({message:"i am changed in lifecycleC",count:20})}}>change message in lifecycleC</button>
            <LifeCycleD msg={this.state.message}/>
            <hr />
            {this.state.count === 15 && <CountCandDComponent/>}
        </div>
      )
    }
    componentDidMount(){
        console.log("componentDidMount lifecycleC")
    }

}