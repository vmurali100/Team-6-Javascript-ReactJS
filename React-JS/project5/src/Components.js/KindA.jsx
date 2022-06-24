import { Component } from "react";
import KindB from "./KindB";
import Kindcount from "./Kindcount";

export default class KindA extends Component{
    constructor(props){
        console.log("triggerd by constructer KindA")
        super(props)
        this.state={
            message:"hello i am from KindA",
            count:10
        }
    }
    render(){
        console.log("triggerd by render KindA")
        return(
            <div>
                <p>KindA</p>
                <button onClick={()=>{this.setState({message:"i am so sweeet",count:11})}}>i will change click me</button>
                <hr />
                <KindB msg={this.state.message}/>
                {this.state.count===10 && <Kindcount/>}
            </div>
        )
    }
    componentDidMount(){
        console.log("componentdidmount triggerd Kind A")
    }

}