import { Component } from "react";
import ChildComp from "./ChildComp";

export default class SamComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: ["sandhya", "neeraja", "sowmya", "bhargavi", "shalini"]
        }
    }
    render() {
        return (
            <div>
                <ChildComp allUsers={this.state.users}/>
            </div>
        )
        
}
}