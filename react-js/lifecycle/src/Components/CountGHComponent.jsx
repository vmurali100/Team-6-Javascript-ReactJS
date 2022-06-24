import { Component } from "react"

class CountGHComponent extends Component{
    componentWillUnmount(){
        console.log("componentwillunmount ")
    }
    render(){
        return(
            <div>
               CountGHComponent
            </div>
        )
    }
}
export default CountGHComponent