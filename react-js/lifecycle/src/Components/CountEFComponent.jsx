import { Component } from "react"

class CountEFComponent extends Component{
    componentWillUnmount(){
        console.log("componentwillunmount ")
    }
    render(){
        return(
            <div>
               CountEFComponent
            </div>
        )
    }
}
export default CountEFComponent