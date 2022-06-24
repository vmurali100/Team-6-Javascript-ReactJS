import { Component } from "react";

class Count12Comp extends Component{
    componentWillUnmount(){
        console.log("componentWillUnmount triggered")
    }
    render(){
        return(
            <div>
                Count12Comp
            </div>
        )
    }
}
export default  Count12Comp