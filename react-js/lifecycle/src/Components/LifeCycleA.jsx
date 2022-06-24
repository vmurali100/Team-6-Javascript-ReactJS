import { Component } from "react";
import CountComponent from "./CountComponent";
import LifeCyxleB from "./LifeCycleB";

export default class LifeCycleA extends Component{
    constructor(props){
        console.log("constructor triggred lifecycleA")
        super(props)
        this.state={
            message:"i am from lifecycleA",
            count:10
        }
    }
    render(){
        console.log("render triggered lifecycleA")
        return(
            <div>
                <p>lifecycleA</p>
                <button onClick={()=>{this.setState({message:"i am changed in life cycleA",count:15})}}>change message in lifecycleA</button>
                <LifeCyxleB msg={this.state.message}/>
                <hr />
                {this.state.count === 10 && <CountComponent/> }
            </div>
        )
    }
    componentDidMount(){
        console.log("componentdidmount lifecycleA")
    }

}
