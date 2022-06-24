import { Component } from "react";
import Countcomponent from "./Countcomponent";

import LifecycleB from "./LifecycleB";

export default class LifecycleA extends Component{
    constructor(props){
        console.log("constructer trigered lifecycleA")
        super(props)

        this.state={
            message:"i am from lifecyclea",
            count:10
        }
    }
    render(){
        console.log("render trigered lifecycleA")
        return(
            <div>
                <p>Lifecycle</p>
                <button onClick={()=>{this.setState({message:"i am changed in lifecycleA",count:15})}}>change message in lifecycleA</button>
                <hr />
                <LifecycleB msg={this.state.message}/>
                <hr />
                {/* === is check the data type ex:string,number,boolen */}
                {/* == is check the value of data ex:age:"20" ,myage:20 that value of 20 */}
                {this.state.count===10 && <Countcomponent/>}
            </div>
        )
    }
    componentDidMount(){
        console.log("componentdidmount did mount trigger lifecycleA")
    }
}