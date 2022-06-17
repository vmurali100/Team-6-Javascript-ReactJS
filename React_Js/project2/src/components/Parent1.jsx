import { Component } from "react";
import Child1 from "./Child1";


export default class Parent1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: ["sandhya", "neeraja", "sowmya", "bhargavi", "shalini"]
        }
    }
    render() {
        return (
            <div>
                <Child1 allUsers={this.state.users}/>
            </div>
        )
        
}
}